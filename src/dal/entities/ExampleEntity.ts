import {PrimaryGeneratedColumn, Column, Entity, CommonModel} from "@enigmatis/polaris-core";

@Entity()
export class ExampleEntity extends CommonModel{
    constructor(exampleField: string) {
        super();
        this.exampleField = exampleField;
    }

    @PrimaryGeneratedColumn()
    protected id!: string;

    @Column()
    exampleField: string;

    public getId(): string{
        return this.id;
    }
}
