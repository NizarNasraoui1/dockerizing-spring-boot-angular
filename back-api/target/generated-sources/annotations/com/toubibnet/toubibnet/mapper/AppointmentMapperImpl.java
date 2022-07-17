package com.toubibnet.toubibnet.mapper;

import com.toubibnet.toubibnet.dto.AppointmentDto;
import com.toubibnet.toubibnet.model.Appointment;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-14T19:49:52+0200",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 1.4.50.v20210914-1429, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class AppointmentMapperImpl implements AppointmentMapper {

    @Override
    public List<AppointmentDto> toDtos(List<Appointment> dtos) {
        if ( dtos == null ) {
            return null;
        }

        List<AppointmentDto> list = new ArrayList<AppointmentDto>( dtos.size() );
        for ( Appointment appointment : dtos ) {
            list.add( toDto( appointment ) );
        }

        return list;
    }

    @Override
    public List<Appointment> toBos(List<AppointmentDto> bos) {
        if ( bos == null ) {
            return null;
        }

        List<Appointment> list = new ArrayList<Appointment>( bos.size() );
        for ( AppointmentDto appointmentDto : bos ) {
            list.add( toBo( appointmentDto ) );
        }

        return list;
    }

    @Override
    public AppointmentDto toDto(Appointment bo) {
        if ( bo == null ) {
            return null;
        }

        AppointmentDto appointmentDto = new AppointmentDto();

        return appointmentDto;
    }

    @Override
    public Appointment toBo(AppointmentDto dto) {
        if ( dto == null ) {
            return null;
        }

        Appointment appointment = new Appointment();

        return appointment;
    }

    @Override
    public Appointment fillBo(AppointmentDto dto, Appointment bo) {
        if ( dto == null ) {
            return null;
        }

        return bo;
    }
}
