const markdown = `
# Jackson Representatives

Find information below about your federal and state representatives, including their names, party affiliations, and maps of their districts.

---

## At a glance

Jackson, New Hampshire is represented by a mix of federal and state officials at multiple levels of government.

**Your current representatives are:**

- **U.S. House (NH District 2):** Maggie Goodlander (D)
- **U.S. Senate:** Maggie Hassan (D)
- **U.S. Senate:** Jeanne Shaheen (D)
- **Governor of New Hampshire:** Kelly Ayotte (R)
- **NH House (Carroll County District 2):** Anita D. Burroughs (D)
- **NH House (Carroll County District 2):** Chris R. McAleer (D)
- **NH Senate (District 3):** Tim McConkey (R)

While some neighboring districts and representatives are noted for regional context, the officials listed below are those who directly represent Jackson residents.

---

## Representatives at the Federal Level

### Congress - US House and Senate

New Hampshire has two representatives in the House and two senators in the Senate.

#### US House

The House of Representatives has 435 members, apportioned by population. New Hampshire has two representatives.

##### District 2

- Maggie Goodlander (D)

  - *Stephanie Weiner serves as the Outreach Director for the North Country in the office of Rep. Goodlander*

#### US Senate

The Senate has 100 members, two from each state.

- Maggie Hassan (D)
- Jeanee Shaheen (D)

###### **Map of Congressional Districts in New Hampshire**

![Congressional Districts](/assets/cong_dist.png)

---

## Representatives at the State Level

### Governor

- Kelly Ayotte (R)

### General Court

The New Hampshire General Court is the state's legislative body. It is bicameral, meaning it has two chambers: the House of Representatives and the Senate. Think of it like the US Congress, but for New Hampshire.

#### State House

The New Hampshire House of Representatives has 400 members, apportioned by population. Jackson is in District 2 of Carroll County, which has two representatives.

##### District 2

- [Anita D Burroughs](https://gc.nh.gov/house/members/member.aspx?member=408822) (D):  PO Box 487  Glen,  NH  03838-0487
- [Chris R McAleer](https://gc.nh.gov/house/members/member.aspx?member=408973) (D):  PO Box 74  Jackson,  NH  03846-0074

###### Map of State House Districts in New Hampshire

![State House Districts](/assets/state_house_dist.png)

###### Map of All Counties & Towns in New Hampshire

![Town & County](/assets/town_count.png)

#### State Senate

##### District 3

The New Hampshire Senate has 24 members, apportioned by population. Jackson is in District 3.

- [Senator McConkey](https://gc.nh.gov/Senate/members/webpages/district03.aspx) (R) State House Room 107 107 North Main Street Concord NH  03301

###### **Map of State Senate Districts in New Hampshire**

![State Senate Districts](/assets/state_senate.png)

---

## Notable people who do not represent us

#### US House

##### District 1

- Chris Pappas (D)

_**Note:** Jackson is in District 2, so Chris Pappas is not our representative. He does represent our neighbors and interests in Bartlett, Hart's Location, Chatham, and North Conway, however, so it's worth noting his presence and politics._


#### State House


##### District 1

_**Note:** Jackson is not in District 1, but it is worth noting the representatives from our neighboring town of Conway._

- [Thomas L Buco](https://gc.nh.gov/house/members/member.aspx?member=376645):  PO Box 3149  Conway,  NH  03818-3149
- [David Paige](https://gc.nh.gov/house/members/member.aspx?member=409144):  State House–House Member Mail 107 North Main Street  Concord,  NH  03301
- [Stephen L Woodcock](https://gc.nh.gov/house/members/member.aspx?member=408824):  PO Box 234  Center Conway,  NH  03813-0234
`;

window.onload = function () {
  const html = marked.parse(markdown);
  document.getElementById("content").innerHTML = html;
};
