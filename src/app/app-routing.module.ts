import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommunityComponent } from './community/community.component';
import { CommunityChallengeComponent } from './community-challenge/community-challenge.component';
import { PlansComponent } from './plans/plans.component';
import { InicialComponent } from './inicial/inicial.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { AuthGuard } from './Skillz_services/Auth-guard.service';
import { MyChallengeComponent } from './my-challenge/my-challenge.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';

const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'myproject', component: MyProjectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'communityChallenge', component: CommunityChallengeComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'my-challenge', component: MyChallengeComponent },
  { path: 'upload-files', component: UploadFilesComponent },

  //rotas bloqueadas
  {
    path: 'user',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'community',
    component: CommunityComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
