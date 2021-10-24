import { createServer, Factory, Model,RestSerializer } from "miragejs";
import { TodoBody,TodoStatus } from "../types/todo";
import faker from "faker";
import moment, { Moment } from "moment";

export function MockServer({ environment = "development" }) {
  return createServer({
    environment,
    models: {
      todo: Model.extend<Partial<TodoBody>>({
      })
    },
    factories: {
      todo: Factory.extend<Partial<TodoBody>>({
        get name() {
          //console.log(this.id)
          //faker.seed(Number(this.id))
          return `Listen to ${faker.music.genre()}`;
        },
        get status(){
          return TodoStatus.NotStarted;
        }
      })
    },
    seeds(server) {
      //server.schema.create('todo',{ name: "Go to Market" });
      //server.create("todo", { name: "Buy Cookies" });
      server.createList("todo", 3);
    },
    routes() {
      //this.urlPrefix = "https://sd8zp.csb.app/";
      this.get("/todos", (schema, request) => {
        return schema.all("todo");
      });
      this.post("/todos", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        schema.create("todo", attrs);
        return schema.all("todo");
      });
      this.put("/todos/:key",(schema,request) => {
        let keyid = request.params.key;
        let attrs = JSON.parse(request.requestBody);
        schema.db.todos.update(keyid,attrs);
        
       //schema.find("todo", keyid).destroy();
        return schema.all("todo");
      })
      this.del("/todos/:key", (schema, request) => {
        let keyid = request.params.key;
        let post = schema.findBy("todo", {id: keyid})
        if(post !== null)
        {
          post.destroy();
        }
        return schema.all("todo");
      });
    }
  });
}