<template>
  <div>
    <section class="hero is-primary is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="block">
            <h1 class="title is-3 has-text-white has-text-weight-bold">Patient Registration</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="section">
        <div class="columns is-mobile is-multiline mb0">
          <div class="column is-full">
            <div class="control" :class="((error.errorName) ? 'has-error' : null)">
              <input
                class="input is-large"
                type="text"
                v-model="name"
                @blur="validateName"
                @keyup="validateName"
              />
              <label class="label is-large">Patient Name</label>
              <i class="bar"></i>
            </div>
          </div>

          <div class="column is-7-desktop is-10-mobile">
            <div class="control" :class="((error.errorAddress) ? 'has-error' : null)">
              <input
                class="input"
                type="text"
                @blur="validateAddress"
                @keyup="validateAddress"
                v-model="address"
              />
              <label class="label">Address</label>
              <i class="bar"></i>
            </div>
          </div>
          <div class="column is-1-desktop is-10-mobile"></div>
          <div class="column is-4-desktop is-10-mobile">
            <div class="control" :class="((error.errorContactNumber) ? 'has-error' : null)">
              <input
                class="input"
                type="text"
                @blur="validateContactNumber"
                @keyup="validateContactNumber"
                v-model="contactNumber"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              />
              <label class="label">Contact Number</label>
              <i class="bar"></i>
            </div>
          </div>

          <div class="column is-2-desktop is-10-mobile">
            <div class="control" :class="((error.errorGender) ? 'has-error' : null)">
              <select v-model="gender" @blur="validateGender" @change="validateGender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label class="label">Gender</label>
              <i class="bar"></i>
            </div>
          </div>
          <div class="column is-1-desktop is-10-mobile"></div>

          <div class="column is-3-desktop is-10-mobile">
            <div class="control" :class="((error.errorDOB) ? 'has-error' : null)">
              <input
                class="input"
                type="date"
                v-model="DOB"
                @blur="validateDOB"
                @keyup="validateDOB"
              />
              <label class="label is-large">Date of Birth</label>
              <i class="bar"></i>
            </div>
          </div>

          <div class="column is-1-desktop is-10-mobile"></div>

          <div class="column is-2-desktop is-10-mobile">
            <div class="control" :class="((error.errorAge) ? 'has-error' : null)">
              <input
                class="input"
                type="text"
                v-model="age"
                @blur="validateAge"
                @keyup="validateAge"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              />
              <label class="label is-large">Age</label>
              <i class="bar"></i>
            </div>
          </div>

          <div class="column is-2-desktop is-10-mobile"></div>

          <div class="column is-2-desktop is-10-mobile">
            <div class="control" :class="((error.errorHeight) ? 'has-error' : null)">
              <input
                class="input"
                type="text"
                v-model="height"
                @blur="validateHeight"
                @keyup="validateHeight"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              />
              <label class="label is-large">Height (cm)</label>
              <i class="bar"></i>
            </div>
          </div>

          <div class="column is-1-desktop is-10-mobile"></div>

          <div class="column is-2-desktop is-10-mobile">
            <div class="control" :class="((error.errorWeight) ? 'has-error' : null)">
              <input
                class="input"
                type="text"
                v-model="weight"
                @blur="validateWeight"
                @keyup="validateWeight"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              />
              <label class="label is-large">Weight (kg)</label>
              <i class="bar"></i>
            </div>
          </div>

          <div class="column is-1-desktop is-10-mobile"></div>

          <div class="column is-2-desktop is-10-mobile">
            <div class="control" :class="((error.errorBMI) ? 'has-error' : null)">
              <input
                class="input "
                type="text"
                v-model="BMI"
                @blur="validateBMI"
                @keyup="validateBMI"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              />
              <label class="label is-large">BMI</label>
              <i class="bar"></i>
            </div>
          </div>

          <div class="column is-1-desktop is-10-mobile"></div>

          <div class="column is-2-desktop is-10-mobile">
            <div class="control" :class="((error.errorBloodPressue) ? 'has-error' : null)">
              <input
                class="input"
                type="text"
                v-model="bloodPressure"
                @blur="validateBloodPressure"
                @keyup="validateBloodPressure"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              />
              <label class="label is-large">Blood Pressure</label>
              <i class="bar"></i>
            </div>
          </div>

          <div class="column is-full is-right">
            <div class="is-pulled-right has-text-right">
              <button
                class="button is-primary has-text-weight-semibold"
                @click="save()"
              >SAVE PATIENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import responseHandler from "@/controllers/responseHandler.js";

export default {
  name: "Register",
  data() {
    return {
      name: null,
      address: null,
      contactNumber: null,
      gender: "Male",
      DOB: null,
      age: null,
      height: null,
      heightInM: null,
      weight: null,
      BMI: null,
      bloodPressure: null,

      error: {
        errorName: false,
        errorAddress: false,
        errorContactNumber: false,
        errorGender: false,
        errorDOB: false,
        errorAge: false,
        errorHeight: false,
        errorWeight: false,
        errorBMI: false,
        errorBloodPressue: false
      }
    };
  },
  watch: {
    height(value) {
      if (this.weight != null) {
        this.heightInM = this.height / 100.0;
        this.BMI = (this.weight / (this.heightInM * this.heightInM)).toFixed(2);
      }
    },

    weight(value) {
      if (this.height != null) {
        this.heightInM = this.height / 100.0;
        this.BMI = (this.weight / (this.heightInM * this.heightInM)).toFixed(2);
      }
    },
    DOB(value) {
      var dob = new Date(value)
      var ageDifMs = Date.now() - dob.getTime();
      var ageDate = new Date(ageDifMs);
      this.age = Math.abs(ageDate.getUTCFullYear() - 1970)
    }
  },
  methods: {
    save() {
      if (!this.validateForm()) {
        console.log("Invalid");
        responseHandler.errorMessage(
          "400",
          "Incomplete Listing",
          "A few required fields are not filled correctly. Please check your details.",
          "#RP001"
        );
      } else {
        responseHandler.successMessage(
          "200",
          "Success",
          "Not Implement yet... :P"
        );
      }
    },
    validateForm() {
      this.validateName();
      this.validateAddress();
      this.validateContactNumber();
      this.validateGender();
      this.validateDOB();
      this.validateAge();
      this.validateHeight();
      this.validateWeight();
      this.validateBMI();
      this.validateBloodPressure();
      if (
        this.error.errorName ||
        this.error.errorAddress ||
        this.error.errorContactNumber ||
        this.error.errorGender ||
        this.error.errorDOB ||
        this.error.errorAge ||
        this.error.errorHeight ||
        this.error.errorWeight ||
        this.error.errorBMI ||
        this.error.errorBloodPressue
      ) {
        return false;
      } else {
        return true;
      }
    },

    validateName() {
      if (!this.name) {
        this.error.errorName = true;
      } else {
        this.error.errorName = false;
      }
    },

    validateAddress() {
      if (!this.address) {
        this.error.errorAddress = true;
      } else {
        this.error.errorAddress = false;
      }
    },

    validateContactNumber() {
      if (!this.contactNumber) {
        this.error.errorContactNumber = true;
      } else {
        this.error.errorContactNumber = false;
      }
    },

    validateGender() {
      if (!this.gender) {
        this.error.errorGender = true;
      } else {
        this.error.errorGender = false;
      }
    },

    validateDOB() {
      if (!this.DOB) {
        this.error.errorDOB = true;
      } else {
        this.error.errorDOB = false;
      }
    },

    validateAge() {
      if (!this.age) {
        this.error.errorAge = true;
      } else {
        this.error.errorAge = false;
      }
    },

    validateHeight() {
      if (!this.height) {
        this.error.errorHeight = true;
      } else {
        this.error.errorHeight = false;
      }
    },

    validateWeight() {
      if (!this.weight) {
        this.error.errorWeight = true;
      } else {
        this.error.errorWeight = false;
      }
    },

    validateBMI() {
      if (!this.BMI) {
        this.error.errorBMI = true;
      } else {
        this.error.errorBMI = false;
      }
    },

    validateBloodPressure() {
      if (!this.bloodPressure) {
        this.error.errorBloodPressue = true;
      } else {
        this.error.errorBloodPressue = false;
      }
    }
  }
};
</script>