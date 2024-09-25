import { Injectable } from "@angular/core";

import { CustomCard } from "../models/search-item.model";

@Injectable({
    providedIn: "root",
})
export class CustomCardService {
    private customCards: CustomCard[] = [];

    addCustomCard(card: CustomCard): void {
        this.customCards.push(card);
    }

    getCustomCards(): CustomCard[] {
        return [...this.customCards];
    }

    removeCustomCard(cardId: string): void {
        this.customCards = this.customCards.filter((card) => card.id !== cardId);
    }

    clearCustomCards(): void {
        this.customCards = [];
    }
}
