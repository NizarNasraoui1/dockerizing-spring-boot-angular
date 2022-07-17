package com.toubibnet.toubibnet.controller;

import com.toubibnet.toubibnet.model.Governorate;
import com.toubibnet.toubibnet.model.Pharmacy;
import com.toubibnet.toubibnet.model.Status;
import com.toubibnet.toubibnet.repository.PharmacyRepository;
import com.toubibnet.toubibnet.exception.ResourceNotFoundException;
import com.toubibnet.toubibnet.service.PharmacyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class PharmacyController {

    @Autowired
    PharmacyService pharmacyService;
    //get all pharmacies
    @GetMapping("/pharmacies")
    public List<Pharmacy> getAllPharmacies(){

        return pharmacyService.getAllPharmacies();
    }
    //create pharmacie
    @PostMapping("/pharmacies")
    public  Pharmacy createEmployee(@RequestBody Pharmacy pharmacy){

        return pharmacyService.createEmployee(pharmacy);
    }
    //get pharmacy by id
    @GetMapping("/pharmacies/{id}")
    public Pharmacy getPharmacyId(@PathVariable Long id) throws ResourceNotFoundException {

        return pharmacyService.getPharmacyId(id);
    }
    //update pharmacy
    @PutMapping("/pharmacies/{id}")
    public  Pharmacy updateEmployee(@PathVariable Long id, @RequestBody Pharmacy pharmacy) throws ResourceNotFoundException {

        return pharmacyService.updateEmployee(id,pharmacy);

    }
    //delete pharmacy
    @DeleteMapping("/pharmacies/{id}")
    public void deletePharmacy(@PathVariable Long id) throws ResourceNotFoundException {

        pharmacyService.deletePharmacy(id);
    }
    //get pharmacy by name
    @GetMapping("/pharmacies/name/{name}")
    public List<Pharmacy> getPharmacyByName(@PathVariable String name) throws ResourceNotFoundException {

        return pharmacyService.getPharmacyByName(name);
    }
    //get pharmacy by governorate
    @GetMapping("/pharmacies/governorate/{governorate}")
    public List<Pharmacy> getPharmacyByGovernorate(@PathVariable Governorate governorate) throws ResourceNotFoundException {
        return pharmacyService.getPharmacyByGovernorate(governorate);
    }
    //get pharmacy by status
    @GetMapping("/pharmacies/status/{status}")
    public List<Pharmacy> getPharmacyByStatus(@PathVariable Status status) throws ResourceNotFoundException {
        return pharmacyService.getPharmacyByStatus(status);
    }
    //get pharmacy by name and governorate
    @GetMapping("/pharmacies/name/{name}/governorate/{governorate}")
    public List<Pharmacy> getPharmacyByNameAndGovenorate(@PathVariable String name ,@PathVariable Governorate governorate) throws ResourceNotFoundException {
        return pharmacyService.getPharmacyByNameAndGovenorate(name,governorate);
    }
    //get pharmacy by name and status
    @GetMapping("/pharmacies/name/{name}/status/{status}")
    public List<Pharmacy> getPharmacyByNameAndStatus(@PathVariable String name ,@PathVariable Status status) throws ResourceNotFoundException {
        return pharmacyService.getPharmacyByNameAndStatus(name,status);
    }
    //get pharmacy by governorate and status
    @GetMapping("/pharmacies/governorate/{governorate}/status/{status}")
    public List<Pharmacy> getPharmacyByGovernorateAndStatus(@PathVariable Governorate governorate , @PathVariable Status status) throws ResourceNotFoundException {
        return pharmacyService.getPharmacyByGovernorateAndStatus(governorate,status);
    }
    //get pharmacy by name,status,governorate
    @GetMapping("/pharmacies/governorate/{governorate}/status/{status}/name/{name}")
    public List<Pharmacy> getPharmacyByNameAndStatusAndName(@PathVariable Governorate governorate , @PathVariable Status status,
                                                            @PathVariable String name) throws ResourceNotFoundException {
        return pharmacyService.getPharmacyByNameAndStatusAndName(governorate,status,name);
    }




}
