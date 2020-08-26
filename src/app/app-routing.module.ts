import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogComponent } from './blog/blog.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path: '', component: HomepageComponent  },
  { path: 'blog', component: BlogComponent  },
  { path: 'skills', component: SkillsComponent  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
