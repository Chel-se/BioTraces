import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PersonController } from "../person.controller";
import { PersonService } from "../person.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  birthdate: new Date(),
  createdAt: new Date(),
  dateOfBirth: new Date(),
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  ssnNumber: "exampleSsnNumber",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  birthdate: new Date(),
  createdAt: new Date(),
  dateOfBirth: new Date(),
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  ssnNumber: "exampleSsnNumber",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    birthdate: new Date(),
    createdAt: new Date(),
    dateOfBirth: new Date(),
    firstName: "exampleFirstName",
    id: "exampleId",
    lastName: "exampleLastName",
    ssnNumber: "exampleSsnNumber",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  birthdate: new Date(),
  createdAt: new Date(),
  dateOfBirth: new Date(),
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  ssnNumber: "exampleSsnNumber",
  updatedAt: new Date(),
};

const service = {
  createPerson() {
    return CREATE_RESULT;
  },
  people: () => FIND_MANY_RESULT,
  person: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Person", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PersonService,
          useValue: service,
        },
      ],
      controllers: [PersonController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /people", async () => {
    await request(app.getHttpServer())
      .post("/people")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        birthdate: CREATE_RESULT.birthdate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /people", async () => {
    await request(app.getHttpServer())
      .get("/people")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          birthdate: FIND_MANY_RESULT[0].birthdate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateOfBirth: FIND_MANY_RESULT[0].dateOfBirth.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /people/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/people"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /people/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/people"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        birthdate: FIND_ONE_RESULT.birthdate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateOfBirth: FIND_ONE_RESULT.dateOfBirth.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /people existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/people")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        birthdate: CREATE_RESULT.birthdate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/people")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
