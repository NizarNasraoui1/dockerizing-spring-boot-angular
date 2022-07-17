package com.toubibnet.toubibnet.service;

import com.toubibnet.toubibnet.model.Governorate;
import com.toubibnet.toubibnet.model.Pharmacy;
import com.toubibnet.toubibnet.repository.PharmacyRepository;
import com.toubibnet.toubibnet.exception.ResourceNotFoundException;
import com.toubibnet.toubibnet.model.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class PharmacyService {
    @Autowired
    PharmacyRepository pharmacyRepository;
    //get all pharmacies
    public List<Pharmacy> getAllPharmacies(){

        return pharmacyRepository.findAll();

    }
    //create a pharmacy
    public  Pharmacy createEmployee(@RequestBody Pharmacy pharmacy){

        return pharmacyRepository.save(pharmacy);
    }
    public Pharmacy getPharmacyId(@PathVariable Long id) throws ResourceNotFoundException {

        return pharmacyRepository
                .findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Pharmacy not found for this id :" + id));

    }
    //update pharmacy

    public  Pharmacy updateEmployee(@PathVariable Long id, @RequestBody Pharmacy pharmacy) throws ResourceNotFoundException {
        Pharmacy pharmacyToUpdate= pharmacyRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Pharmacy not found for this id :" + id));

        pharmacyToUpdate.setName(pharmacy.getName());
        pharmacyToUpdate.setAddress(pharmacy.getAddress());
        pharmacyToUpdate.setStatus(pharmacy.getStatus());
        pharmacyToUpdate.setPhone(pharmacy.getPhone());
        pharmacyToUpdate.setGovernorate(pharmacy.getGovernorate());

        return pharmacyRepository.save(pharmacyToUpdate);

    }
    //delete pharmacy

    public void deletePharmacy(@PathVariable Long id) throws ResourceNotFoundException {
        Pharmacy pharmacy = pharmacyRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Pharmacy not found for this id :" + id));

        pharmacyRepository.delete(pharmacy);
    }
    public List<Pharmacy> getPharmacyByName(@PathVariable String name) throws ResourceNotFoundException {

        return pharmacyRepository.findByName(name).
                orElseThrow(()->new ResourceNotFoundException("Pharmacy not found for this name :" + name));
    }
    public List<Pharmacy> getPharmacyByGovernorate(@PathVariable Governorate governorate) throws ResourceNotFoundException {
        return pharmacyRepository.findByGovernorate(governorate)
                .orElseThrow(()->new ResourceNotFoundException("not found"));
    }
    public List<Pharmacy> getPharmacyByStatus(@PathVariable Status status) throws ResourceNotFoundException {
        return pharmacyRepository.findByStatus(status)
                .orElseThrow(()->new ResourceNotFoundException("not found"));
    }
    public List<Pharmacy> getPharmacyByNameAndGovenorate(@PathVariable String name ,@PathVariable Governorate governorate) throws ResourceNotFoundException {
        return pharmacyRepository.findByNameAndGovernorate(name,governorate)
                .orElseThrow(()->new ResourceNotFoundException("not found"));
    }
    public List<Pharmacy> getPharmacyByNameAndStatus(@PathVariable String name ,@PathVariable Status status) throws ResourceNotFoundException {
        return pharmacyRepository.findByNameAndStatus(name,status)
                .orElseThrow(()->new ResourceNotFoundException("not found"));
    }
    public List<Pharmacy> getPharmacyByGovernorateAndStatus(@PathVariable Governorate governorate , @PathVariable Status status) throws ResourceNotFoundException {
        return pharmacyRepository.findByGovernorateAndStatus(governorate,status)
                .orElseThrow(()->new ResourceNotFoundException("not found"));
    }
    public List<Pharmacy> getPharmacyByNameAndStatusAndName(@PathVariable Governorate governorate , @PathVariable Status status,
                                                            @PathVariable String name) throws ResourceNotFoundException {
        return pharmacyRepository.findByGovernorateAndStatusAndName(governorate,status,name)
                .orElseThrow(()->new ResourceNotFoundException("not found"));
    }

}
