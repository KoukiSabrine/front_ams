import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/app-navbar" },
  { path: "listProvider", component: ListProviderComponent },
  { path: "addProvider", component: AddProviderComponent },
  { path: "updateProvider/:id", component: UpdateProviderComponent },
  {path:"listByPovider/:id",component:ListArticlesComponent}, 
  {path:"addArticle",component:AddArticleComponent},
  {path:"update/:idProvider/:id",component:UpdateArticleComponent}
  //{ path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
