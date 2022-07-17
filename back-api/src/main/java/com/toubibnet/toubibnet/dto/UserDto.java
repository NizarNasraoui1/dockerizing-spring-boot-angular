package com.toubibnet.toubibnet.dto;

import com.toubibnet.toubibnet.model.Appointment;
import com.toubibnet.toubibnet.model.Question;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto {
    Long id;
    String firstName;
    String lastName;
    String email;
    Integer phoneNumber;
    List<Appointment> appointments=new ArrayList<>();
    List<Question>questionList=new ArrayList<>();
}
