// import { TestBed, async, ComponentFixture } from '@angular/core/testing';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { of } from 'rxjs/observable/of';

// import { RifflerDeckSubmitterComponent } from './riffler-deck-submitter.component';
// import { RifflerHeaderComponent } from './../riffler-header/riffler-header.component';
// import { RifflerDeckComponent } from './../riffler-deck/riffler-deck.component';
// import { AppComponent } from './../app.component';

// import { HttpErrorResponse } from '@angular/common/http';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatCardModule } from '@angular/material/card';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import { MatButtonModule } from '@angular/material/button';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatInputModule } from '@angular/material/input';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { CardObject } from './../riffler-deck/riffler-deck.model';

// import { RifflerProxy } from './../riffler.proxy';
// import { DeckSubmitterService } from './riffler-deck-submitter.service';
// import { HttpModule } from '@angular/http';
// import { doesNotThrow } from 'assert';
// xdescribe('RifflerDeckSubmitterComponent', () => {

//   let fixture: ComponentFixture<RifflerDeckSubmitterComponent>;
//   let app: any;
//   let component: RifflerDeckSubmitterComponent;
//   const de: DebugElement = undefined;

//   // let appService: AppService;
//   // let spy: jasmine.Spy;

//   // execute before tests
//   beforeEach(async(() => {

//     TestBed.configureTestingModule({
//       imports: [
//         MatToolbarModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule,
//         BrowserAnimationsModule, MatTabsModule, MatExpansionModule,
//         MatInputModule, MatMenuModule, MatFormFieldModule, FormsModule,
//         ReactiveFormsModule, MatSnackBarModule, HttpModule
//       ],
//       providers: [
//         DeckSubmitterService, RifflerProxy
//       ],
//       declarations: [
//         RifflerDeckSubmitterComponent, RifflerDeckComponent, RifflerHeaderComponent, AppComponent
//       ],
//     }).compileComponents();
//   }));

//   beforeEach((() => {
//     fixture = TestBed.createComponent(RifflerDeckSubmitterComponent);
//     app = fixture.debugElement.componentInstance;
//     component = fixture.componentInstance;
//     // app.deckListRequestData = `1 Delver of Secrets`;
//     // app.getDeckData();
//   }));

//   it('should create the deck submitter', async(() => {
//     expect(app).toBeTruthy();
//   }));
// });

// // Straight Jasmine testing without Angular's testing support
// describe('Testing DeckSubmitterService with correct response and 404 with RifflerProxy', () => {
//   let httpClientSpy: { post: jasmine.Spy };
//   let service: DeckSubmitterService;

//   beforeEach(() => {
//     // TODO: spy on other methods too
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
//     service = new DeckSubmitterService(<any>httpClientSpy);
//   });

//   it('should return expected cards (HttpClient called once)', async () => {
//     expect(service.scryFallDeckData$).toBeDefined();
//     const expectedCard: any[] = [{ name: 'Delver of Secrets' }];
//     httpClientSpy.post.and.returnValue(of(expectedCard));
//     await service.getDeckData('1 Delver of Secrets');
//     service.scryFallDeckData$.subscribe(card => {
//       card.subscribe(val => {
//         expect(val[0].name).toContain('Delver of Secrets'),
//           fail
//       });
//     });
//     expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
//   });

//   it('should return an error when the server returns a 404', async () => {
//     const errorResponse = new HttpErrorResponse({
//       error: 'test 404 error',
//       status: 404, statusText: 'Not Found'
//     });

//     httpClientSpy.post.and.returnValue(of(errorResponse));
//     await service.getDeckData(' 1 D  e  l  ver  o f Se  c  r ets  ');
//     service.scryFallDeckData$.subscribe(card => {
//       card.subscribe(error => {
//         expect(error.message).toContain('test 400 error'),
//           fail
//       });
//     });
//   });

// });
