import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { format } from 'sql-formatter';
import { DiffContent } from 'ngx-text-diff/lib/ngx-text-diff.model';
import { Observable, Subject } from 'rxjs';
import { Change } from 'src/app/shared/models/diff.model';
import { basicLineSmallView, countChanges } from 'src/app/shared/utils';

@Component({
  selector: 'app-diff-results',
  templateUrl: './diff-results.component.html',
  styleUrls: ['./diff-results.component.scss']
})
export class DiffResultsComponent implements OnInit, OnChanges {

  @Input()
  sourceName!: string

  @Input()
  targetName!: string

  @Input()
  change: Change | undefined

  content: DiffContent = {
    leftContent: basicLineSmallView,
    rightContent: basicLineSmallView
  };

  contentObservable: Subject<DiffContent> = new Subject<DiffContent>();
  contentObservable$: Observable<DiffContent> = this.contentObservable.asObservable();

  format = format
  countChanges = countChanges

  constructor() { 
    // This is intentional
  }

  ngOnInit(): void {
    this.mountExibitionTexts()
  }
  ngOnChanges(changes: SimpleChanges) {
    this.mountExibitionTexts()
  }
  mountExibitionTexts() {
    if (this.change) {
      this.content.leftContent = this.change.sourceContent
      this.content.rightContent = this.change.targetContent
    } else {
      this.content.leftContent = basicLineSmallView
      this.content.rightContent = basicLineSmallView
    }

    this.contentObservable.next(this.content);
  }
}
