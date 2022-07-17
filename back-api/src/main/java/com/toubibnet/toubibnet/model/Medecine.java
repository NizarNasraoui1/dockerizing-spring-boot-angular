package com.toubibnet.toubibnet.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Medecine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    @ManyToOne
    @JoinColumn(name="laboratory_id",referencedColumnName = "id")
    Laboratory laboratory;
    @ManyToOne
    @JoinColumn(name="therapeutic_class_id",referencedColumnName = "id")
    TherapeuticClass therapeuticClass;
}
