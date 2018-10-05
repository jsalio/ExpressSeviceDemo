// /lib/routes/crmRoutes.ts
import { Request, Response } from "express";
import { HomeController } from "../express-controllers/home-controller";

export class Routes {
    public homeController: HomeController = new HomeController();
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
        app.route('/contact').get(this.homeController.getAllContacts)
    }
}