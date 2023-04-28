export declare abstract class EntityBaseModel<Model> {
    id: number;
    createdAt: Date;
    updateAt: Date;
    deletedAt: Date;
    constructor(partial: Partial<Model>);
}
