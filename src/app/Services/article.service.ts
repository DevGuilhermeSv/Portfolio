import { IArticles } from "src/app/Interfaces/IArticles";
import { articlesList } from "../Repositories/Articles";
export class AticleService {
    
    getArticle(id:string): IArticles{
      const article =  articlesList.find(c=>c.id.toString() == id);
      if (article){
        return article
      }
      throw new Error("Artigo não encontrado");

    }
    getAll(): IArticles[]{
        return articlesList;
    }
}