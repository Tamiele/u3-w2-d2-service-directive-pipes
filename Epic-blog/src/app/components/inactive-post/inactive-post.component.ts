import { Component } from '@angular/core';
import { iJSONresponse } from '../../interfaces/i-jsonresponse';
import { Post } from '../../interfaces/post';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss',
})
export class InactivePostComponent {
  constructor(private postSvc: PostService) {}
  inactivePost!: Post[];

  ngOnInit(): void {
    this.postSvc.getAllPost().then((dati: iJSONresponse) => {
      this.inactivePost = dati.posts.filter((p) => p.active === false);
    });
  }
}
