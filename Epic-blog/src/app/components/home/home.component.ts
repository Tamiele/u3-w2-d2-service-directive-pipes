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
  arrayPost!: Post[]; // Tutti i post
  filteredPosts: Post[] = []; // Post filtrati che saranno visualizzati
  uniqueTags: string[] = []; // Tag unici
  postInEvidenza!: Post; // Post in evidenza
  arrayRandomPost: Post[] = []; // Array per i post casuali
  showForm: boolean = false; // Flag per mostrare/nascondere il form
  selectedTag: string | null = null; // Tag selezionato per filtrare

  constructor(private postSvc: PostService) {}

  ngOnInit(): void {
    // Ottieni tutti i post e inizializza i dati
    this.postSvc.getAllPost().then((dati: iJSONresponse) => {
      this.arrayPost = dati.posts; // Carica tutti i post
      this.postSvc.setPosts(this.arrayPost); // Imposta i post nel servizio
      this.filteredPosts = this.arrayPost; // Mostra tutti i post all'inizio
      this.getPostRandom(); // Ottieni i post casuali
      this.uniqueTags = this.postSvc.getUniqueTags(this.arrayPost); // Ottiene i tag unici dal service
    });
  }

  getPostRandom() {
    for (let i = 0; i <= 3; i++) {
      const randomIndex = Math.floor(Math.random() * this.arrayPost.length);
      this.postInEvidenza = this.arrayPost[randomIndex];
      this.arrayRandomPost.push(this.arrayPost[randomIndex]);
    }
  }

  // Funzione per filtrare i post in base al tag selezionato
  filterPostsByTag(tag: string): void {
    this.selectedTag = tag; // Imposta il tag selezionato
    this.filteredPosts = this.postSvc.filterPostsByTag(tag); // Filtra i post dal service
  }

  // Funzione per reimpostare i post (mostra tutti i post)
  clearFilter(): void {
    this.selectedTag = null; // Nessun tag selezionato
    this.filteredPosts = this.arrayPost; // Mostra di nuovo tutti i post
  }

  // Funzione per aprire/chiudere il form
  toggleForm() {
    this.showForm = !this.showForm;
  }

  save() {}
}
