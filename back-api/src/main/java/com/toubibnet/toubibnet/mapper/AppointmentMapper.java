package com.toubibnet.toubibnet.mapper;

import com.toubibnet.toubibnet.dto.AppointmentDto;
import com.toubibnet.toubibnet.model.Appointment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AppointmentMapper extends GenericMapper<Appointment, AppointmentDto>{
}





