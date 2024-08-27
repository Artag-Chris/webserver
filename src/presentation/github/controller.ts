import { Request, Response } from "express";
import { GitHubService } from "../../services/github.services";

export class GithubController {
  constructor(
    private readonly githubService = new GitHubService(),
  ) {}

  webhookHandler = (req: Request, res: Response) => {

    const githubEvent = req.headers["x-github-event"]?? "unknown";
   // const signature = req.headers["x-hub-signature-256"]?? "unknown";
    const payload = req.body;
    let message:string
    
     switch (githubEvent) {
 
    case "star": 
         message=  this.githubService.onStart(payload);
    break;

    default:
      message=`Unhandled event type: ${githubEvent}`;

     }
    
  console.log(message)

    res.status(200).send(`Accepted`);
  };
}
