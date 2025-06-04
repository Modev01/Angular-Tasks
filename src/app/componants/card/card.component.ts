import { Component , Input } from '@angular/core';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() postData! :IPost;
isDeleted: boolean = false;

toggleActive(){
  this.postData.active= !this.postData.active;
}


  deletePost() {
    const confirmed = confirm('Are you sure you want to delete this post?');
    if (confirmed) {
      this.isDeleted = true;
    }
  }
}
