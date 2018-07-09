import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { IMapMarker } from "../models/map-marker";

@Component({
  selector: 'lbs-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  markers: IMapMarker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
      content: 'AAAAAAAAAAAAA',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
      content: 'BBBBBBBBBBBBB',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
      content: 'CCCCCCCCCCCCC',
		  draggable: true
	  }
  ]


  zoomLevel: number = 8;
  lat: number = 51.673858;
  lng: number = 7.815982;
  
  addMarker($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  markerDragEnd(m: IMapMarker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}


