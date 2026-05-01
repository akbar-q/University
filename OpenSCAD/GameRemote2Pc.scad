$fn = 96;

// View mode: "assembled", "exploded", "base", "lid"
part = "exploded";

// Overall size
length = 95;
width  = 44;
height = 16;

// Split
lid_h  = 5.0;
base_h = height - lid_h;

// Print/fit tuning
wall          = 2.4;
bottom_wall   = 2.4;
top_wall      = 2.4;
fit_clearance = 0.25;

// Lid alignment lip
plug_depth = 3.0;
plug_wall  = 1.6;

// Fasteners
boss_od        = 8.0;
boss_height    = base_h - bottom_wall - 0.8;
screw_clear_d  = 3.2;   // lid clearance for M3-ish screw
screw_pilot_d  = 2.4;   // base pilot hole for thread-forming screw
screw_head_d   = 6.2;
screw_head_h   = 2.2;

// Top rectangular holes, side-by-side
slot_len   = 10;
slot_w     = 4;
slot_gap   = 4;
slot_x     = 34;

// Top circular hole
top_hole_d = 6;
top_hole_x = 70;

// Wire hole in the flat end face
wire_hole_d = 5;
wire_hole_z = 5.5; // kept in the base half for easy printing

explode_gap = 18;

// Screw post locations
post_positions = [
    [20, 10],
    [20, width - 10],
    [length - 14, 10],
    [length - 14, width - 10]
];

// Capsule footprint: rounded front, flat back
module capsule2d(len, wid) {
    r = wid / 2;

    union() {
        translate([r, 0])
            square([len - r, wid]);

        translate([r, wid / 2])
            circle(r = r);
    }
}

// The inside cavity of the base
module cavity2d() {
    offset(delta = -wall)
        capsule2d(length, width);
}

// Perimeter lip on the lid that fits into the base cavity
module plug_ring2d() {
    difference() {
        offset(delta = -(wall + fit_clearance))
            capsule2d(length, width);

        offset(delta = -(wall + fit_clearance + plug_wall))
            capsule2d(length, width);
    }
}

module screw_posts() {
    for (p = post_positions)
        translate([p[0], p[1], bottom_wall])
            cylinder(h = boss_height, d = boss_od);
}

module base_shell() {
    difference() {
        linear_extrude(height = base_h)
            capsule2d(length, width);

        // Hollow interior, open at the top
        translate([0, 0, bottom_wall])
            linear_extrude(height = base_h - bottom_wall + 0.1)
                cavity2d();

        // Wire hole through the flat end face into the cavity
        translate([length - wall - 0.1, width / 2, wire_hole_z])
            rotate([0, 90, 0])
                cylinder(h = wall + 0.3, d = wire_hole_d);
    }
}

module base_part() {
    difference() {
        union() {
            base_shell();
            screw_posts();
        }

        // Pilot holes in the screw posts
        for (p = post_positions)
            translate([p[0], p[1], bottom_wall - 0.1])
                cylinder(h = boss_height + 0.3, d = screw_pilot_d);
    }
}

module lid_blank() {
    difference() {
        // Outer lid body
        linear_extrude(height = lid_h)
            capsule2d(length, width);

        // Hollow the lid from the underside
        translate([0, 0, top_wall])
            linear_extrude(height = lid_h - top_wall + 0.1)
                cavity2d();
    }
}

module lid_part() {
    difference() {
        union() {
            lid_blank();

            // Internal perimeter lip for alignment
            translate([0, 0, lid_h - plug_depth])
                linear_extrude(height = plug_depth)
                    plug_ring2d();
        }

        // Two rectangular holes on the top face only
        translate([slot_x, width/2 - slot_gap/2 - slot_w, -0.1])
            cube([slot_len, slot_w, top_wall + 0.2]);

        translate([slot_x, width/2 + slot_gap/2, -0.1])
            cube([slot_len, slot_w, top_wall + 0.2]);

        // Circular hole on the top face only
        translate([top_hole_x, width / 2, -0.1])
            cylinder(h = top_wall + 0.2, d = top_hole_d);

        // Screw clearance holes through the lid
        for (p = post_positions)
            translate([p[0], p[1], -0.1])
                cylinder(h = lid_h + 0.2, d = screw_clear_d);

        // Counterbores for screw heads
        for (p = post_positions)
            translate([p[0], p[1], -0.1])
                cylinder(h = screw_head_h + 0.1, d = screw_head_d);
    }
}

module assembled_lid(z_gap = 0) {
    translate([0, 0, base_h + lid_h + z_gap])
        mirror([0, 0, 1])
            lid_part();
}

if (part == "base") {
    base_part();
}
else if (part == "lid") {
    lid_part();
}
else if (part == "assembled") {
    base_part();
    assembled_lid(0);
}
else if (part == "exploded") {
    base_part();
    assembled_lid(explode_gap);
}