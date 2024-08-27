import { GithubStarPayload } from "../interfaces";



export class GitHubService{

    constructor(
       
    ){}


    onStart(payload:GithubStarPayload):string {
    
    let message: string = " thanks";
    const {starred_at,action, sender, repository} = payload;

    if(starred_at){
        message = ` User  ${sender.login}  ${action} star on ${repository.full_name}`
    }else{
        message = ` User  ${sender.login}  ${action} star on ${repository.full_name}`
    }

 

        return message
    }

}