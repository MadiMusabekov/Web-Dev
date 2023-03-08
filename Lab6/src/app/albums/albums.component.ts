import {Component, OnInit} from '@angular/core';
import {Album} from "../albums";
import {PostService} from "../post.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  constructor(private postService: PostService) {
    this.albums = [];
  }

  ngOnInit(): void{
    this.postService.getAlbums().subscribe(
      (response) =>{
      this.albums = response.slice(0,10);
    },
      (error:any) =>{
        console.log(error);
      }
      );
  }

  changeTitle(newTitle: string, index: number){
    this.albums[index].title = newTitle;
  }

  handleDeleteAlbum(album:Album):void{
    const index = this.albums.indexOf(album);
    if(index !== -1){
      this.albums.splice(index, 1);
    }
  }
}
