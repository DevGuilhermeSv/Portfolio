import { IArticles } from "src/app/Interfaces/IArticles";
import { articlesList } from "../Repositories/Articles";
export class AticleService {
    
    getArticle(id:string): IArticles | undefined{
      return articlesList.find(c=>c.id.toString() == id);

    }
    getAll(): IArticles[]{
        return articlesList;
    }
}