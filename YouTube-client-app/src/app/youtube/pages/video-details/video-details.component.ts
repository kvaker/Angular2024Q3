import { CommonModule, DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

import { HeaderComponent } from "../../../core/components/header/header.component";
import { SearchDataService } from "../../../search/services/search-data.service";
import { VideoItem } from "../../models/video.model";

@Component({
    selector: "app-video-details",
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderComponent],
    providers: [DatePipe],
    templateUrl: "./video-details.component.html",
    styleUrls: ["./video-details.component.scss"],
})
export class VideoDetailsComponent implements OnInit {
    video!: VideoItem;

    constructor(
        private route: ActivatedRoute,
        private dataService: SearchDataService,
        private datePipe: DatePipe
    ) {}

    ngOnInit(): void {
        const videoId = this.route.snapshot.paramMap.get("id");
        if (videoId) {
            this.dataService.getVideoById(videoId).subscribe((video) => {
                this.video = video!;
            });
        }
    }
}
