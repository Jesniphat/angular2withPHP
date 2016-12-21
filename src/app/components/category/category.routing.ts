import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryManageComponent } from './category-manage/category-manage.component';

export const routes: Routes = [
    { path: 'category_list', component: CategoryListComponent },
    { path: 'category_list/create_cate/:id', component: CategoryManageComponent }
];

export const routing = RouterModule.forChild(routes);