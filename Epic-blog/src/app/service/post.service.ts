import { Injectable } from '@angular/core';

import { iJSONresponse } from '../interfaces/i-jsonresponse';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getAllPost() {
    return <Promise<iJSONresponse>>fetch('db.json').then((res) => res.json());
  }
}
