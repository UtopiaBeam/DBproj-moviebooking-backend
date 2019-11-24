import { Controller, Get, Req, Res, Param,Post, Delete, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get()
    findAll(): Promise<Company[]> {
        return this.companyService.findAll();
    }

    @Get(':name')
    findOnebyid( @Param() params): Promise<Company> {
        return this.companyService.findOnebyid(params.name);
    }

    @Post('create')
    createCompany(@Req() req, @Res() res) {
        return this.companyService.createCompany(req,res);
    }

    @Put('update')
    updateCompany(@Req() req, @Res() res) {
        return this.companyService.updateCompany(req,res);
    }

    @Delete('delete/:name')
    deleteCompany(@Param() params) : string {
        return this.companyService.deleteCompany(params.name);
    }
}
