import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfMakerComponent } from './pdf-maker/pdf-maker.component';

const routes: Routes = [
  { path: 'pdfMaker', component: PdfMakerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
