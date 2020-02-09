<template>
    <q-page>
        <div class="row q-pa-md flex-center reg-page">

            <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md col-md-8 col-sm-12 col-12 col-lg-8 form-card"
            >
            <div class="text-h6">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="../assets/clogo.jpeg">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Membership Registration Form</q-item-label>
                  <q-item-label caption><strong>Presbyterian Church of Ghana, Millennium City Sector, Preaching Point, Kasoa.</strong></q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="row q-gutter-sm">
              <q-input
                  standard
                  dense
                  class="col-md-4 col-sm-11 col-11 col-lg-12"
                  v-model="firstName"
                  label="First name *"
                  hint="First name"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'First name cannot be empty']"
              />

              <q-input
                  standard
                  dense
                  class="col-md-3 col-sm-11 col-11 col-lg-12"
                  v-model="middleName"
                  label="Middle name *"
                  hint="Middle name is optional"
              />

              <q-input
              standard
              dense
              class="col-md-4 col-sm-11 col-11 col-lg-12"
              v-model="lastName"
              label="Last name"
              hint="Last name"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Last name cannot be empty']"
              />
            </div>

            <div class="row q-gutter-sm">
              <q-input
              dense
              filled
              v-model="dateOfBirth"
              label="Date of birth"
              hint="Select date of birth"
              mask="date"
              :rules="['date']"
              class="col-md-4 col-sm-11 col-11">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="dateOfBirth" default-view="Years" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>

              <q-input
              dense
              filled
              v-model="churchJoiningDate"
              label="Date of joining congregation"
              hint="Select date when you first joined congregation"
              mask="date"
              :rules="['date']"
              class="col-md-3 col-sm-11 col-11">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="churchJoiningDate" default-view="Years" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>

              <q-input
              dense
              filled
              v-model="dateOfBaptism"
              label="Date of baptism"
              hint="Select date of baptism"
              mask="date"
              :rules="['date']"
              class="col-md-4 col-sm-11 col-11">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="dateOfBaptism" default-view="Years" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>

            <div class="row q-gutter-sm">
              <q-select
                dense
                multiple
                v-model="affiliatedGroup"
                :options="affiliatedGroupOptions"
                label="Affiliated Group in church"
                hint="Select a group (or groups) you have joined in the church"
                class="col-md-6 col-lg-6 col-sm-11 col-11">
                <template v-if="affiliatedGroup.length != 0" v-slot:append>
                  <q-icon name="cancel" @click.stop="affiliatedGroup = []" class="cursor-pointer" />
                </template>
              </q-select>

              <q-select
                dense
                multiple
                v-model="churchPositionHeld"
                :options="churchPositionHeldOptions"
                label="Position held in church"
                hint="Select a position (or positions) you hold in the church"
                class="col-md-5 col-lg-6 col-sm-11 col-11">
                <template v-if="churchPositionHeld.length != 0" v-slot:append>
                  <q-icon name="cancel" @click.stop="churchPositionHeld = []" class="cursor-pointer" />
                </template>
              </q-select>
            </div>

              <div class="row q-gutter-sm" v-show="churchPositionHeld.includes('Other')">
                <q-input
                dense
                standard
                class="col-md-11 col-lg-11 col-sm-11 col-11"
                hint="Please explain/state the title of the position held"
                label="State the title of the position"
                v-model="otherPosition"
                />
              </div>

              <div class="row q-gutter-sm">

                <q-input
                dense
                standard
                class="col-md-6 col-lg-11 col-sm-11 col-11"
                hint="Please state the name of your next of kin"
                label="Next of kin"
                v-model="nextOfKin"
                />

                <q-input
                dense
                standard
                class="col-md-5 col-lg-11 col-sm-11 col-11"
                hint="Please state the contact number of your named next of kin"
                label="Next of kin contact"
                v-model="nextOfKinContact"
                />

                <q-input
                dense
                standard
                class="col-md-5 col-lg-5 col-sm-11 col-11"
                hint="Please state your father's full name"
                label="Father's name"
                v-model="fatherName"
                />

                <q-input
                dense
                standard
                class="col-md-6 col-lg-5 col-sm-11 col-11"
                hint="Please state your mother's full name"
                label="Mother's name"
                v-model="motherName"
                />

                <q-input
                dense
                standard
                class="col-md-5 col-lg-5 col-sm-11 col-11"
                hint="Please state your phone number"
                label="Phone number"
                v-model="phoneNumber"
                />

                <q-input
                dense
                standard
                type="email"
                class="col-md-6 col-lg-6 col-sm-11 col-11"
                hint="Please state your email address if any"
                label="Email address (optional)"
                v-model="emailAddress"
                />

                <q-select
                dense
                v-model="parentLivingStatus"
                :options="parentLivingStatusOptions"
                label="Parent's status"
                hint="Select an option that applies to your parent's"
                class="col-md-11 col-lg-11 col-sm-11 col-11">
                <template v-if="parentLivingStatus" v-slot:append>
                  <q-icon name="cancel" @click.stop="parentLivingStatus = null" class="cursor-pointer" />
                </template>
                </q-select>

                <q-select
                dense
                v-model="communicantStatus"
                :options="communicantStatusOptions"
                label="Communicant status"
                hint="Select your communicant status"
                class="col-md-11 col-lg-11 col-sm-11 col-11">
                <template v-if="communicantStatus" v-slot:append>
                  <q-icon name="cancel" @click.stop="communicantStatus = null" class="cursor-pointer" />
                </template>
                </q-select>

                <q-select
                dense
                v-model="sex"
                :options="sexOptions"
                label="Sex"
                hint="Select your sex"
                class="col-md-11 col-lg-11 col-sm-11 col-11">
                <template v-if="sex" v-slot:append>
                  <q-icon name="cancel" @click.stop="sex = null" class="cursor-pointer" />
                </template>
                </q-select>

                <q-select
                dense
                v-model="maritalStatus"
                :options="maritalStatusOptions"
                label="Marital status"
                hint="Select your marital status"
                class="col-md-11 col-lg-11 col-sm-11 col-11">
                </q-select>

                <q-input
                dense
                standard
                v-show="maritalStatus == 'Married'"
                class="col-md-11 col-lg-11 col-sm-11 col-11"
                hint="Please state the name of your spouse"
                label="Spouse name"
                v-model="spouseName"
                />

              <q-input
              dense
              filled
              v-show="maritalStatus == 'Married'"
              v-model="dateOfMarriage"
              label="Date of marriage"
              hint="Select date of marriage"
              mask="date"
              :rules="['date']"
              class="col-md-11 col-sm-11 col-11">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="dateOfMarriage" default-view="Years" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>

                <q-select
                dense
                v-model="marriageType"
                :options="marriageTypeOptions"
                v-show="maritalStatus == 'Married'"
                label="Marriage type"
                hint="Select your marriage initiation type"
                class="col-md-11 col-lg-11 col-sm-11 col-11">
                </q-select>

                <q-input
                dense
                standard
                type="number"
                class="col-md-11 col-lg-11 col-sm-11 col-11"
                hint="Please state number of children if any"
                label="Children"
                v-model="numberOfChildren"
                />

                <q-select
                dense
                multiple
                v-model="languagesSpoken"
                :options="languagesSpokenOptions"
                label="Language(s)"
                hint="Select your languages you are fluent in"
                class="col-md-11 col-lg-11 col-sm-11 col-11">
                <template v-if="languagesSpoken.length != 0" v-slot:append>
                  <q-icon name="cancel" @click.stop="languagesSpoken = []" class="cursor-pointer" />
                </template>
                </q-select>

                <q-input
                dense
                standard
                v-show="languagesSpoken.includes('Others')"
                class="col-md-11 col-lg-11 col-sm-11 col-11"
                hint="Please list the other language(s) spoken separated by comma (if many)"
                label="State other languages spoken"
                v-model="otherLanguages"
                />

                <q-select
                dense
                v-model="nationality"
                :options="nationalityOptions"
                label="Nationality"
                hint="Select your nationality"
                class="col-md-11 col-lg-11 col-sm-11 col-11">
                <template v-if="nationality" v-slot:append>
                  <q-icon name="cancel" @click.stop="nationality = null" class="cursor-pointer" />
                </template>
                </q-select>

                <q-input
                dense
                standard
                v-show="nationality == 'Other'"
                class="col-md-11 col-lg-11 col-sm-11 col-11"
                hint="Please state your nationality"
                label="State nationality"
                v-model="otherNationality"
                />

                <q-select
                dense
                v-model="employmentStatus"
                :options="employmentStatusOptions"
                label="Employment status"
                hint="Kindly select whether you are employed or not"
                class="col-md-11 col-lg-11 col-sm-11 col-11"
                />

                <q-input
                dense
                standard
                v-show="employmentStatus == 'Employed'"
                class="col-md-11 col-lg-11 col-sm-11 col-11"
                hint="Please state the work you currently do"
                label="Profession"
                v-model="occupation"
                />

                <q-input
                dense
                standard
                class="col-md-11 col-lg-11 col-sm-11 col-11"
                hint="Please state where you live (e.g., area, house number) or a description to where you live"
                label="Residence"
                v-model="residence"
                />

                <q-input
                dense
                standard
                class="col-md-11 col-lg-11 col-sm-11 col-11"
                hint="Please state where you were born"
                label="Birth place"
                v-model="placeOfBirth"
                />

                <q-input
                dense
                standard
                class="col-md-11 col-lg-11 col-sm-11 col-11"
                hint="Please state your hometown"
                label="Hometown"
                v-model="hometown"
                />

              </div>

              <q-uploader
                auto-upload
                label="Select and upload a clear image of yourself. Max file size (1Mb)"
                accept=".jpg, image/*"
                :max-file-size="1024000"
                @added="added"
                @uploaded="uploaded"
                @finish="finished"
                @factory-failed="factoryFailed"
                @failed="failed"
                @uploading="uploading"
                :factory="uploadFactory"
                class="col-md-11 col-lg-11 col-sm-11 col-11 uploader-div"
                ref="uploader"
              />

            <div>
                <q-btn no-caps label="Submit" type="submit" color="primary"/>
                <q-btn no-caps label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
            </q-form>
        </div>
    </q-page>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      firstName: null,
      middleName: null,
      dateOfBirth: null,
      churchJoiningDate: '0000/00/00',
      dateOfBaptism: '0000/00/00',
      lastName: null,
      affiliatedGroup: [],
      numberOfChildren: null,
      nextOfKin: null,
      nextOfKinContact: null,
      nationality: null,
      otherNationality: null,
      nationalityOptions: [
        'Ghanaian', 'Nigerian', 'Other'
      ],
      marriageType: null,
      sex: null,
      sexOptions: [
        'Male', 'Female'
      ],
      marriageTypeOptions: [
        'Ordinance', 'Customary'
      ],
      dateOfMarriage: '0000/00/00',
      affiliatedGroupOptions: [
        'Church Choir', 'Youth Choir', 'Men\'s Fellowship', 'Women\'s Fellowship',
        'Young Adult Fellowship (YAF)', 'Children\'s Service', 'YPG', 'Junior Youth',
        'Singing Band', 'IT Group', 'Technical Group', 'Church Band', 'None'
      ],
      churchPositionHeld: [],
      churchPositionHeldOptions: [
        'Section member', 'Teacher', 'Administration', 'Presbyter', 'None', 'Other'
      ],
      otherPosition: null,
      otherLanguages: null,
      employmentStatusOptions: [
        'Employed', 'Unemployed'
      ],
      employmentStatus: 'Unemployed',
      occupation: null,
      parentLivingStatus: null,
      parentLivingStatusOptions: [
        'Both alive', 'Father deceased', 'Mother deceased', 'Both deceased'
      ],
      hometown: null,
      placeOfBirth: null,
      residence: null,
      fatherName: null,
      motherName: null,
      maritalStatus: 'Single',
      phoneNumber: null,
      emailAddress: null,
      spouseName: null,
      communicantStatus: null,
      communicantStatusOptions: [
        'Communicant', 'Non-communicant'
      ],
      maritalStatusOptions: [
        'Single', 'Married', 'Divorced'
      ],
      languagesSpoken: [],
      languagesSpokenOptions: [
        'Twi', 'Ewe', 'Ga', 'Frafra', 'Dagbaani', 'Hausa', 'English', 'French', 'Others'
      ]
    }
  },
  methods: {
    uploading () {
      // console.log('uploading')
    },
    finished () {
      // console.log('finished')
    },
    uploaded () {
      // console.log('uploaded')
    },
    added () {
      // console.log('added')
    },
    failed () {
      // console.log('failed')
    },
    factoryFailed () {
      // console.log('factory failed')
    },
    uploadFactory (files) {
      return new Promise((resolve, reject) => {
        const fd = new FormData()
        let file = files[0]
        fd.append('file', file)
        let path = 'http://localhost:5000/api/upload'
        axios.post(path, fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => {
          resolve({ url: 'http://localhost:5000/api/uploadSuccess' })
        }).catch(error => {
          reject(error)
        })
      })
    },
    onSubmit () {
      // some basic error checks
      if (this.maritalStatus === 'Single') {
        this.spouseName = null
        this.marriageType = null
        this.dateOfMarriage = '0000/00/00'
      }

      if (this.employmentStatus === 'Unemployed') {
        this.occupation = ''
      }

      let msg = {
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        churchJoiningDate: this.churchJoiningDate,
        dateOfBaptism: this.dateOfBaptism,
        affiliatedGroup: this.affiliatedGroup,
        churchPositionHeld: this.churchPositionHeld,
        nextOfKin: this.nextOfKin,
        nextOfKinContact: this.nextOfKinContact,
        fatherName: this.fatherName,
        motherName: this.motherName,
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
        parentLivingStatus: this.parentLivingStatus,
        communicantStatus: this.communicantStatus,
        sex: this.sex,
        maritalStatus: this.maritalStatus,
        spouseName: this.spouseName,
        dateOfMarriage: this.dateOfMarriage,
        marriageType: this.marriageType,
        childrenNumber: this.numberOfChildren,
        languagesSpoken: this.languagesSpoken,
        nationality: this.nationality,
        employmentStatus: this.employmentStatus,
        profession: this.occupation,
        residence: this.residence,
        birthplace: this.placeOfBirth,
        hometown: this.hometown
      }
      // eslint-disable-next-line no-unused-vars
      let basePath = 'http://127.0.0.1:5000/api/register'
      // eslint-disable-next-line no-new
      new Promise((resolve, reject) => {
        axios.post(basePath, msg).then(resp => {
          console.log(resp)
          resolve(resp)
        }).catch(err => {
          console.log('Could not register user')
          reject(err)
        })
      })
    },
    onReset () {
      this.firstName = null
      this.middleName = null
      this.lastName = null
      this.dateOfBirth = null
      this.dateOfBaptism = null
      this.churchJoiningDate = null
      this.affiliatedGroup = []
      this.churchPositionHeld = []
      this.nextOfKin = null
      this.nextOfKinContact = null
      this.fatherName = null
      this.motherName = null
      this.phoneNumber = null
      this.emailAddress = null
      this.parentLivingStatus = null
      this.communicantStatus = null
      this.sex = null
      this.maritalStatus = null
      this.spouseName = null
      this.dateOfMarriage = null
      this.marriageType = null
      this.childrenNumber = null
      this.languagesSpoken = []
      this.nationality = null
      this.employmentStatus = null
      this.occupation = null
      this.residence = null
      this.hometown = null
      this.placeOfBirth = null
    }
  }
}
</script>
<style lang="stylus">
.form-card
  border solid $grey-4 1px
  background-color $grey-2
  border-radius 5px
  padding-bottom 20px
  margin-top 30px

.uploader-div
   max-width 300px

.reg-page
  background-color $blue-3
</style>
