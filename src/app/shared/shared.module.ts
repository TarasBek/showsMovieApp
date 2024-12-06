import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';

import { ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { StoreModule } from '@ngrx/store';

import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { metaReducers } from './shared.state';
import { sharedReducer } from './reducers/shared.reducer';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CardsComponent } from './components/cards/cards.component';
import { EffectsModule } from '@ngrx/effects';
import { SharedEffects } from './effects/shared.effects';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [NavbarComponent, CardsComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ListboxModule,
    TabViewModule,
    ButtonModule,

    EffectsModule.forFeature([SharedEffects]),
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    CarouselModule,
    TagModule,
    TabMenuModule,
    MenubarModule,
    AvatarModule,
    CardModule,
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    ToastModule,
    ProgressSpinnerModule,
    StoreModule.forFeature('shared', sharedReducer, {
      metaReducers: metaReducers,
    }),
  ],
  providers: [MessageService],
  exports: [NavbarComponent, CardsComponent, ItemDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
