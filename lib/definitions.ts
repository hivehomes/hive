export interface AuthUserData {
    id: Number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string,
    bookings: Array<Booking>;
    repairs: Array<Repair>;
    amenities: Array<Amenity>;
    permissions: Array<Number>;
    userType: "resident" | "staff" | "management" | "admin";
    buildingUnit: BuildingUnit;
    bulletinPosts: Array<BulletinPost>;
    deliveries: Array<Delivery>;
}

export interface BulletinPost {
    id: Number;
    posterId: Number;
    postType: "marketplace" | "help" | "discussion";
    title: string;
    body: string;

}

export interface Booking {
    id: Number;
    time: string;
    bookStartTime: Date;
    bookEndTime: Date;
    status: string;
    amenity: Amenity;
}

export interface Repair {
    id: Number;
    subject: string;
    description: string;
    status: string;
}

export interface Amenity {
    id: Number;
    name: string;
    openTime: Date;
    closeTime: Date;
}

export interface BuildingUnit {
    buildingUnitId: Number;
    unitNum: string;
    rooms: Number;
    size: Number;
}

export interface Delivery {
    id: Number;
    recipientId: Number;
    loggerId: Number;
    shipper: string;
    trackingNumber: string;
    date: Date;
    status: string;
}

