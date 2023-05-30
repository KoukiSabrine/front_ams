import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/app-navbar" },
  { path: "listProvider", component: ListProviderComponent, canActivate: [AuthGaurdService] },
  { path: "addProvider", component: AddProviderComponent , canActivate: [AuthGaurdService]},
  { path: "updateProvider/:id", component: UpdateProviderComponent , canActivate: [AuthGaurdService]},
  {path:"listByPovider/:id",component:ListArticlesComponent, canActivate: [AuthGaurdService]}, 
  {path:"addArticle",component:AddArticleComponent, canActivate: [AuthGaurdService]},
  {path:"update/:idProvider/:id",component:UpdateArticleComponent, canActivate: [AuthGaurdService]},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent, canActivate: [AuthGaurdService]}

  //{ path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
