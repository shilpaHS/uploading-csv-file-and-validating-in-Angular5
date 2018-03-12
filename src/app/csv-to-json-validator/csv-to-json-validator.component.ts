import { Component, OnInit } from '@angular/core';
import { PapaParseService } from 'ngx-papaparse';


@Component({
    selector: 'app-csv-to-json-validator',
    templateUrl: './csv-to-json-validator.component.html',
    styleUrls: ['./csv-to-json-validator.component.css']
})
export class CsvToJsonValidatorComponent {
    private csvFile;    
    constructor(private papa: PapaParseService) {
    }
    public changeListener(files: FileList) {
        this.csvFile = files[0]
        // console.log(files[0]);
     
    }
    validateCsv(){
   let csv = this.csvFile;
        this.papa.parse(csv, {
            header: true,
            skipEmptyLines: true,
            complete: (results, file) => {
                console.log('Parsed: ', JSON.stringify(results.data));
                for(var i=0;i<results.data.length;i++){
                    
                }
            }
        });
    }

}
