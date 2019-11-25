import {
    Controller,
    Get,
    Req,
    Res,
    Param,
    Post,
    Delete,
    Put,
    Body,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.entity';
import { CompanyDto } from './company.dto';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get()
    findAll(): Promise<Company[]> {
        return this.companyService.findAll();
    }

    @Get(':name')
    findById(@Param('name') name: string): Promise<Company> {
        return this.companyService.findById(name);
    }

    @Post()
    create(@Body() companyDto: CompanyDto) {
        return this.companyService.create(companyDto);
    }
}
