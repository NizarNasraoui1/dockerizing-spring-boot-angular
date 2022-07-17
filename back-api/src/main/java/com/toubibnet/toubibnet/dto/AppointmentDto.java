package com.toubibnet.toubibnet.dto;

import com.toubibnet.toubibnet.model.Doctor;
import com.toubibnet.toubibnet.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto {
    Long id;
    LocalDateTime date;
    Doctor doctor;
    User user;
}
