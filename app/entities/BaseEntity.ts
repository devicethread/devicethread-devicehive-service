import { ClassConstructor, plainToInstance, instanceToPlain } from "class-transformer";
import { IsDateString, IsOptional, IsString, IsUUID } from "class-validator";

export class BaseEntity {
    
    id: any;
    createdAt: Date;
    updatedAt: Date;
}

export class BaseEntityFilter {
    
    @IsUUID()
    @IsOptional()
    id: any;
    
    @IsDateString()
    @IsOptional()
    createdAt: Date;

    @IsDateString()
    @IsOptional()
    updatedAt: Date;

    @IsString()
    @IsOptional()
    op: String; // Should be an enum of operators
}

export class BaseEntityRequest {

    toEntity(cls: ClassConstructor<BaseEntity>): BaseEntity {
        return plainToInstance(cls, instanceToPlain(this));
    }
}

export class BaseEntityResponse {
    
    @IsOptional()
    id: any;
    
    @IsOptional()
    createdAt: Date;

    @IsOptional()
    updatedAt: Date;
}