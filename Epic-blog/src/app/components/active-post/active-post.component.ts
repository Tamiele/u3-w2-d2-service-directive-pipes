import { Component } from '@angular/core';

import { Post } from '../../interfaces/post';
import { PostService } from '../../service/post.service';
import { iJSONresponse } from '../../interfaces/i-jsonresponse';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {
  constructor(private postSvc: PostService) {}

  activePost!: Post[];

  ngOnInit(): void {
    this.postSvc.getAllPost().then((dati: iJSONresponse) => {
      this.activePost = dati.posts.filter((p) => p.active === true);
    });
  }
}
