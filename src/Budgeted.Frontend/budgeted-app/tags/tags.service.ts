export class TagsService {
    allTags: Array<string> = ["house", "utilities", "food", "books", "social", "tech", "vacation", "oo", "oooo"];

    getTags(): Array<string> {
        return this.allTags;
    }
}