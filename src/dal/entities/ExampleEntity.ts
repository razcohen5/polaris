import {Column, Entity, CommonModel} from "@enigmatis/polaris-core";

@Entity()
export class ExampleEntity extends CommonModel{
    constructor(exampleField: string) {
        super();
        this.exampleField = exampleField;
    }

    @Column()
    exampleField: string;
}
