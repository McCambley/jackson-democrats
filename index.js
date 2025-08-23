// 4. JavaScript to perform the conversion
window.onload = function () {
  // Get the markdown text from the script tag

  // Convert the markdown text to HTML
  const html = marked.parse(`
Find information below about your federal and state representatives, including their names, party affiliations, and maps of their districts.

## Federal

This section details people that represent you in the federal government.

### Congress

This section includes your representatives in the US Congress. There are two chambers in Congress: the House of Representatives and the Senate. New Hampshire has two representatives in the House and two senators in the Senate.

#### US House

The House of Representatives has 435 members, apportioned by population. New Hampshire has two representatives.

**Names**

- (District 2) Maggie Goodlander (D)
    - New Hampshire District #2
- (Distrcit 1) Not Chris Pappas (D)


#### US Senate

The Senate has 100 members, two from each state.

**Names**

- Maggie Hassan (D)
- Jeanee Shaheen (D)

**Maps**

![Congressional Districts](/assets/cong_dist.png)

## State

### Governor (1)

**Name**

- Kelly Ayotte (R)

**Map**

![Town & County](/assets/town_count.png)

### General Court

#### State House (400)

**District 2**

- [Anita D Burroughs](https://gc.nh.gov/house/members/member.aspx?member=408822) (D):  PO Box 487  Glen,  NH  03838-0487
- [Chris R McAleer](https://gc.nh.gov/house/members/member.aspx?member=408973) (D):  PO Box 74  Jackson,  NH  03846-0074

**District 1 - Conway (Not my reps)**

- [Thomas L Buco](https://gc.nh.gov/house/members/member.aspx?member=376645):  PO Box 3149  Conway,  NH  03818-3149
- [David Paige](https://gc.nh.gov/house/members/member.aspx?member=409144):  State House–House Member Mail 107 North Main Street  Concord,  NH  03301
- [Stephen L Woodcock](https://gc.nh.gov/house/members/member.aspx?member=408824):  PO Box 234  Center Conway,  NH  03813-0234

**Map**

![State House Districts](/assets/state_house_dist.png)

#### State Senate (24)

**Names**

- (3) [Senator McConkey](https://gc.nh.gov/Senate/members/webpages/district03.aspx)  (R) State HouseRoom 107  107 North Main Street Concord NH  03301

**Map**

![State Senate Districts](/assets/state_senate.png)
`);

  // Set the innerHTML of the content div to the converted HTML
  document.getElementById("content").innerHTML = html;
};
