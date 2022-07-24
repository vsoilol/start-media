import { trigger, transition, style, animate } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { fadeInAnimation } from 'src/app/helpers/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class MainPageComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  constructor(private router: Router, private translate: TranslateService) {}

  public isGay: boolean = false;

  ngOnInit(): void {
    if (
      this.router.url === '/ru/gay-vadim-vlad' ||
      this.router.url === '/bel/gay-vadim-vlad'
    ) {
      this.isGay = true;
    }
  }

  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;

  isPlay: boolean = false;

  toggleVideo(event: any) {
    var myVideo: any = document.getElementById('videoPlayer');
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  public redirectToPage(url: string) {
    this.router.navigate([`/${this.translate.currentLang}/${url}`]);
  }

  get isVideoPlay(): boolean {
    var myVideo: any = document.getElementById('videoPlayer');
    return !myVideo.paused;
  }

  playPause() {
    var myVideo: any = this.videoplayer.nativeElement;
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }
}
