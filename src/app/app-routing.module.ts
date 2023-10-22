import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShbHomeComponent } from './shb-home/shb-home.component';
import { ShbResumeComponent } from './shb-resume/shb-resume.component';

const routes: Routes = [
  { path: '', component: ShbHomeComponent },
  { path: 'resume', component: ShbResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
