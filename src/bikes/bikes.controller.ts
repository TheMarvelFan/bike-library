import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { Bike } from './entities/bike.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('bikes')
@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all bikes' })
  findAll(): Promise<Bike[]> {
    return this.bikesService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new bike' })
  create(@Body() createBikeDto: CreateBikeDto): Promise<Bike> {
    return this.bikesService.create(createBikeDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Bike> {
    return this.bikesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a bike' })
  update(
    @Param('id') id: string,
    @Body() updateBikeDto: UpdateBikeDto,
  ): Promise<Bike> {
    return this.bikesService.update(id, updateBikeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a bike' })
  remove(@Param('id') id: string): Promise<void> {
    return this.bikesService.remove(id);
  }
}
