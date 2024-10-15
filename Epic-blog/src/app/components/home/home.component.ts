import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../service/post.service';
import { iJSONresponse } from '../../interfaces/i-jsonresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private postSvc: PostService) {}

  arrayPost!: Post[];
  postInEvidenza!: Post;
  arrayRandomPost: Post[] = [];
  showForm: boolean = false;

  ngOnInit(): void {
    this.postSvc.getAllPost().then((dati: iJSONresponse) => {
      this.arrayPost = dati.posts;
      this.getPostRandom();
    });
  }

  getPostRandom() {
    for (let i = 0; i <= 3; i++) {
      const randomIndex = Math.floor(Math.random() * this.arrayPost.length);
      this.postInEvidenza = this.arrayPost[randomIndex];
      this.arrayRandomPost.push(this.arrayPost[randomIndex]);
    }
  }

  // Funzione per aprire/chiudere il form
  toggleForm() {
    this.showForm = !this.showForm;
  }

  save() {}
}
