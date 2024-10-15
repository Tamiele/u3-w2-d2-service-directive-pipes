import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { iJSONresponse } from '../interfaces/i-jsonresponse';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = []; // Array per memorizzare i post

  constructor() {}

  // Ottieni tutti i post da un file JSON
  getAllPost(): Promise<iJSONresponse> {
    return fetch('db.json').then((res) => res.json());
  }

  // Imposta i post nel servizio
  setPosts(posts: Post[]): void {
    this.posts = posts;
    console.log(posts);
  }

  // Ottieni i tag unici dai post
  getUniqueTags(posts: Post[]): string[] {
    const tagSet = new Set<string>(); // Set per conservare tag unici
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagSet.add(tag); // Aggiunge i tag al Set
      });
    });
    return Array.from(tagSet); // Restituisce i tag unici come array
  }

  // Filtra i post in base al tag selezionato
  filterPostsByTag(tag: string): Post[] {
    return this.posts.filter((post) => post.tags.includes(tag)); // Filtra i post
  }
}
