import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NavbarFooterComponent } from './components/navbar-footer/navbar-footer.component';
import { ModalComponent } from './components/modal/modal.component';

export const routes: Routes = [
    {path: "", component: NavbarFooterComponent},
];